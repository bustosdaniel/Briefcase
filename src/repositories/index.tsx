import { Box, Link, Typography } from "@mui/material";

const Projects = [
  {
    id: 1,
    name: 'Airbnb',
    button: 'Airbnb',
    context: 'This project is a simplified clone of the Airbnb website. It allows users to search for accommodations in different locations and filter the search results based on various criteria.',
    link: 'https://github.com/bustosdaniel/Airbnb'
  },
  {
    id: 2,
    name: 'Home Page',
    button: 'HomePage',
    context: 'This is a project based on the design of Edies homepage. The goal of this project is to replicate the design provided in Figma and create a functional web page that closely resembles the original design',
    link: 'https://github.com/bustosdaniel/HomePage'
  },
  {
    id: 3,
    name: 'Food App',
    button: 'FoodApp',
    context: '-',
    link: 'https://github.com/bustosdaniel/Food-app'
  },
  {
    id: 4,
    name: 'Top Animes',
    button: 'Animes',
    context: 'Sure, heres a more concise summary: The project is a web application that displays a list of animes (Japanese animated series and movies). Users can filter anime by status and type, explore details, and watch trailers. The interface has pagination buttons and uses a custom modal to display trailers.',
    link: 'https://github.com/bustosdaniel/Animes'
  },
  {
    id: 5,
    name: 'Rick & Morty',
    button: 'Rick&Morty',
    context: 'The project is a web application that uses the "Rick and Morty" API to display information about the characters of the series. Presented in the interface is a list of cards containing images and details of each character, such as their name, status, species, and location. Users can explore the characters and click on links to learn more about their location and the first episode they appear in. The app uses components such as header, section, and card to organize and display data.',
    link: 'https://github.com/bustosdaniel/Rick-Morty'
  },
  {
    id: 6,
    name: 'Systems Engineer',
    button: 'SystemsEngineer',
    context: 'The web page addresses various aspects of systems engineering using HTML, TypeScript and CSS. It focuses on key topics such as databases, computer structure, cloud computing, network and computer security, Big Data and cybersecurity. Each section provides information on fundamental concepts, importance, and applications in the field of systems engineering. The page was developed for educational purposes and provides a general introduction to these topics. Readers can explore this platform to gain a basic understanding of these areas and find links to specialized sources for more detailed information.',
    link: 'https://github.com/bustosdaniel/Exposition-context'
  },
  {
    id: 7,
    name: 'Compound Interest',
    button: 'CompoundInterest',
    context: 'The "Compound Interes" project is a web application built using HTML, CSS and JavaScript. Its purpose is to allow users to estimate how their savings may grow over time. Users enter data such as the initial deposit, annual contribution, number of years, and estimated interest. Then, when you click the "Calculate" button, the application processes these values and displays the final projected balance. The calculator offers a visually intuitive way to understand how initial deposits, annual contributions, and interest can interact to form a cumulative balance over time.',
    link: 'https://github.com/bustosdaniel/Compound-interest'
  },
  {
    id: 8,
    name: 'Image Search Engine',
    button: 'ImageSearch',
    context: 'The project is a web app that uses React and the Formik library to create an image search calculator on Unsplash. The interface is divided into a header, an image container, and an article layout. Users can search for images by entering keywords in a search field and then view the results in the form of item cards. Each item card displays an image and a description of the image sourced from Unsplash. Clicking on an item card opens the image in a new browser window. The layout is designed to be responsive and features a columnar organization of images. The app uses the Unsplash API to retrieve images based on user search queries.',
    link: 'https://github.com/bustosdaniel/search-image'
  },
  {
    id: 9,
    name: 'Shopping Cart',
    button: 'ShoppingCart',
    context: 'The project is a simple online store built with React. The application displays a list of products, each with its name, price, and image. Users can add products to the shopping cart by clicking the "Add to Cart" button. The shopping cart shows the number of products added and can be opened and closed. The app also includes a navigation bar with a logo and a cart icon that shows the number of products in the cart. The interface uses a clean design and a modular component structure to display the products and manage the shopping cart.',
    link: 'https://github.com/bustosdaniel/Shopping-cart'
  },
  {
    id: 11,
    name: 'Component Button',
    button: 'ComponentButton',
    context: 'This project is a button component library, specifically designed with predefined styles. The library provides a variety of button styles that can be easily used in React-based web applications.',
    link: 'https://github.com/bustosdaniel/Button'
  },
  {
    id: 12,
    name: 'Login',
    button: 'Login',
    context: '-',
    link: 'https://github.com/bustosdaniel/login'
  },
  {
    id: 13,
    name: 'Clone McDonalds',
    button: 'McDonalds',
    context: '-',
    link: 'https://github.com/bustosdaniel/MCdonalds-Clone'
  },
]
export default function Repositories() {
  return (
    <Box>
      {Projects.map((item) => (
        <Box key={item.id} margin='30px 0' padding='20px' borderRadius='10px' border='1px solid #c6c6c6' width='520px'>
          <Typography fontSize='20px' fontWeight='600'>{item.name}</Typography>
          <Typography fontSize='16px' paddingY='10px' fontWeight='400'>{item.context}</Typography>
          <Link
            href={`${item.link}`}
            underline='none'
            sx={{
              ':hover': {
                bgcolor: '#e7e7e7',
                borderRadius: '10px',
                padding: '5px 15px',
                color: '#9a9a9a'
              }
            }}
          >
            {item.button}
          </Link>
        </Box>
      ))}
    </Box>
  )
}
