import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  function handleViewImage(url: string) {
    console.log('url', url);
  }

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        {cards.map(card => (<Card data={card} viewImage={handleViewImage} />))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}

      {<ModalViewImage
        isOpen={true}
        onClose={() => console.log('close')}
        imgUrl={ }
      />}
    </>
  );
}
