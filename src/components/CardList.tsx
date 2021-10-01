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
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentImageUrl, setCurrentImageUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE

  function handleViewImage(url: string) {
    onOpen()
    setCurrentImageUrl(url)
  }

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        {cards.map(card => (<Card data={card} viewImage={handleViewImage} />))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}

      {isOpen && <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={currentImageUrl}
      />}
    </>
  );
}
