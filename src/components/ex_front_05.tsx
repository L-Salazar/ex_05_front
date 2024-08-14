import './ex_front_05.css'

const ExFront05 = () => {

    const products = [
        {
            name: 'Placa de vídeo',
            price: "R$3000,00",
            description: "Placa de vídeo para rodar os jogos atuais",
        },
        {
            name: 'Celular',
            price: "R$2000,00",
            description: "Celular moderno com loja de aplicativos",
        },
        {
            name: 'Teclado RGB',
            price: "R$500,00",
            description: "Teclado RGB para dar mais FPS",
        },
    ]

    return (
        <>
            {products.map((product, index) => (
                <p key={index} className='card'>
                    <p className='card-title'>Nome: {product.name}</p>
                    <p className='card-price'>Valor: {product.price}</p>
                    <p className='card-description'>Descrição: {product.description}</p>
                </p>
            ))}
        </>
    )
}

export default ExFront05