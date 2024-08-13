import Container from '@components/atoms/Container';
import { twMerge } from 'tailwind-merge';
import { MouseEventHandler, useState } from 'react';

const navigatorItemNames = ['B급', '행사', '정책', '관광', '이슈'];
type NavigatorItemNames = typeof navigatorItemNames[number];

function VideoNavigator() {
  const [currentCategory,
    setCurrentCategory] = useState<NavigatorItemNames>('B급');

  return (
    <Container classes="h-[47px] absolute bottom-0 left-0 w-full">
      {
        navigatorItemNames.map((item) => (
          <NavigatorItem
            itemName={item}
            selected={item === currentCategory}
            onClick={() => setCurrentCategory(item)}
            key={`navigator-item-${item}`}
          />
        ))
      }
    </Container>
  );
}

function NavigatorItem({ itemName, selected, onClick }:
{ itemName: string, selected: boolean, onClick: MouseEventHandler<HTMLDivElement> }) {
  let colorClass = 'bg-lightGrey text-grey';

  if (selected) {
    colorClass = 'bg-primary text-white';
  }

  const merged = twMerge(colorClass, 'h-full grow cursor-pointer');

  return (
    <Container classes={merged} onClick={onClick} alignItems="items-center" justifyContents="justify-center">
      <p>{itemName}</p>
    </Container>
  );
}

export default VideoNavigator;
