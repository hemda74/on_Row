import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Draggable } from '@/components/Draggable';
import { Droppable } from '@/components/Droppable';

export default function Example() {
	const [parent, setParent] = useState<string | null>(null);
	const draggable = <Draggable id="draggable">Hello There </Draggable>;

	const handleDragEnd = ({ over }: DragEndEvent) => {
		if (over) {
			setParent(over.id.toString()); // Explicitly cast to string
		} else {
			setParent(null);
		}
	};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			{!parent ? draggable : null}
			<Droppable id="droppable">
				{parent === 'droppable'
					? draggable
					: 'Drop here'}
			</Droppable>
		</DndContext>
	);
}
