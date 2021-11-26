import { NextPage } from 'next';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { memo, useState } from 'react';

const Boards: NextPage = () => {

  const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
    const custom: Quote = {
      id: `id-${k}`,
      content: `Quote ${k}`,
    };

    return custom;
  });

  const [state, setState] = useState({ quotes: initial });

  const Quote = ({ quote, index }) => (
    <Draggable draggableId={quote.id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='card bg-green-300 m-4'
        >
          {quote.content}
        </div>
      )}
    </Draggable>
  );

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  const QuoteList = memo(function QuoteList({ quotes }) {
    return quotes.map((quote: QuoteType, index: number) => (
      <Quote quote={quote} index={index} key={quote.id} />
    ));
  });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index,
    );

    setState({ quotes });
  }

  return (
    <>
      <div className='text-center my-10'>
        <h1 className='text-2xl'>ガントチャートアプリ</h1>
      </div>
      <div className='card w-96 shadow-md m-auto py-5 px-8 rounded-sm'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <QuoteList quotes={state.quotes} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default Boards;
