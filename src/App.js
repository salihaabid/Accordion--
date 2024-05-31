import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className='accordion'>
      {data.map((el, i) => (
        <Items
          num={i}
          title={el.title}
          text={el.text}
          key={el.title}
          curOpen={curOpen}
          onCurOpen={setCurOpen}
        />
      ))}
    </div>
  );
}

function Items({ num, title, text, curOpen, onCurOpen }) {
  const isOpen = num === curOpen;

  function handleIsOpen() {
    if (isOpen) {
      onCurOpen(null); // Close the accordion if it's already open
    } else {
      onCurOpen(num); // Open the accordion if it's closed
    }
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleIsOpen}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <p className='content-box'>{text}</p>}
    </div>
  );
}
