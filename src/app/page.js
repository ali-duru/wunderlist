'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	const addTodo = (e) => {
		e.preventDefault();
		if (!input) return;
		setTodos([...todos, { id: Date.now(), text: input, done: false }]);
		setInput('');
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const markTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, done: !todo.done } : todo
			)
		);
	};

	return (
		<main>
			<form onSubmit={addTodo}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Add a new todo"
				/>
				<button type="submit">Add Todo</button>
			</form>
			<div class="bg-white py-24 sm:py-32">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl lg:mx-0">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Yapılacaklar
						</h2>
						{/* <p class="mt-2 text-lg leading-8 text-gray-600">
							Learn how to grow your business with our expert
							advice.
						</p> */}
					</div>
					{/* loop */}
				</div>
			</div>
		</main>
	);
}
