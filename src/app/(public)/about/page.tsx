import Image from 'next/image'

export default function About() {
  return (
    <div className='container mx-auto px-4 py-16 text-center'>
      <h2 className='text-4xl font-bold mb-8'>
        SuShiMi: Больше, чем просто доставка суши
      </h2>
      <Image
        src='/h3.jpg'
        width={600}
        height={200}
        alt='SuShiMi Sushi'
        className='rounded-lg mb-8 mx-auto'
      />
      <p className='text-lg mb-8'>
        SuShiMi - это не просто доставка суши и роллов. Это наша страсть к
        японской кухне и желание поделиться ею с вами. Мы тщательно отбираем
        ингредиенты, чтобы гарантировать свежесть и высокое качество каждого
        блюда. Наши повара - настоящие мастера своего дела, которые с любовью
        готовят каждый заказ.
      </p>
      <h3 className='text-2xl font-semibold mb-4'>
        Выбирая SuShiMi, вы выбираете:
      </h3>
      <ul className='list-disc list-inside text-lg mb-8'>
        <li>Натуральные и свежие продукты</li>
        <li>Аутентичные рецепты японской кухни</li>
        <li>Искусное приготовление каждого блюда</li>
        <li>Уникальные авторские роллы</li>
      </ul>
      <p className='text-lg'>
        Попробуйте SuShiMi и откройте для себя мир настоящей японской кухни!
      </p>
    </div>
  )
}
