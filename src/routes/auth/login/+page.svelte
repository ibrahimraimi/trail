<script lang="ts">
	import { Button } from "$lib/components/ui/button/index";
	import * as Card from "$lib/components/ui/card/index";
	import { Label } from "$lib/components/ui/label/index";
	import { Input } from "$lib/components/ui/input/index";
</script>

<Card.Root>
	<Card.Header class="space-y-1">
		<Card.Title class="text-2xl">Login to your account</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<span class="w-full border-t" />
			</div>
		</div>
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input id="email" type="email" placeholder="m@example.com" />
		</div>
		<div class="grid gap-2">
			<Label for="password">Password</Label>
			<Input id="password" type="password" />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">Create account</Button>
	</Card.Footer>
</Card.Root>
