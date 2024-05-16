<script lang="ts">
	import { toast } from "svelte-sonner";
	import type { PageData } from "../$types";

	import UserNav from "./(components)/user-nav.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import { Label } from "$lib/components/ui/label/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Table from "$lib/components/ui/table/index.js";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
	import { Trash } from "svelte-radix";
	import { Tabs } from "bits-ui";

	export let data: PageData;

	$: ({ tasks } = data);

	let position = "bottom";
</script>

<div class="h-full flex-col space-y-8 p-8 md:flex">
	<div class="flex items-center justify-between space-y-2">
		<div>
			<h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
			<p class="text-muted-foreground">Here's a list of your tasks</p>
		</div>
		<div class="flex items-center space-x-2">
			<UserNav />
		</div>
	</div>

	<div class="flex flex-1 items-center space-x-2">
		<Input placeholder="Filter tasks..." class="h-8 w-[150px] lg:w-[250px]" type="search" />

		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: "outline" })}>Add Task</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>New Task</Dialog.Title>
					<Dialog.Description>Add a new task here. Click save when you're done.</Dialog.Description>
				</Dialog.Header>
				<div class="grid gap-4 py-4">
					<form action="?/createTask" method="POST">
						<div class="grid items-center gap-4">
							<Label for="title" class="text-left">Title</Label>
							<Input id="title" type="text" name="title" class="col-span-3" />
						</div>
						<div class="my-5 grid items-center gap-4">
							<Label for="content" class="text-left">Description</Label>
							<Input id="content" type="text" name="content" class="col-span-3" />
						</div>
						<Button type="submit" on:click={() => toast.success("Task has been created")}
							>Add Task</Button
						>
					</form>
				</div>
			</Dialog.Content>
		</Dialog.Root>
	</div>
	<Separator />

	<!-- <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		{#each tasks as task}
			<Card.Root>
				<Card.Header>
					<Card.Title>{task.title}</Card.Title>
				</Card.Header>
				<Card.Content class="grid gap-4">
					<p>{task.content}</p>
				</Card.Content>
				<Card.Footer>
					<Button variant="outline" size="icon">
						<Trash />
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div> -->
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>Task</Table.Head>
				<Table.Head>Description</Table.Head>
				<Table.Head class="text-right">Status</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each tasks as task}
				<Table.Row>
					<Table.Cell>{task.title}</Table.Cell>
					<Table.Cell>{task.content}</Table.Cell>
					<Table.Cell class="text-right"></Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
