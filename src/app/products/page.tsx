import ProductData from "./data.json";
import {
  Container,
  Grid,
  Card,
  Text,
  Image,
  Link,
  CardHeader,
} from "@nextui-org/react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  link: string;
};

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Product 1",
//     description: "High-quality product 1 with excellent features.",
//     image: "https://betavee.en.alibaba.com/productimage1.jpg",
//     price: "$100",
//     link: "https://betavee.en.alibaba.com/product1.html",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     description: "Durable and reliable product 2 for everyday use.",
//     image: "https://betavee.en.alibaba.com/productimage2.jpg",
//     price: "$200",
//     link: "https://betavee.en.alibaba.com/product2.html",
//   },
//   // Add more products as needed
// ];

const products = ProductData.map(({ name, image, price, link }, idx) => ({
  id: idx,
  name,
  image,
  price,
  link,
}));

export default function Products() {
  return (
    <Container>
      <Text h1>Our Products</Text>
      <Grid.Container gap={2} justify="flex-start">
        {products.map((product) => (
          <Grid xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <Card.Header>
                <Text h4>{product.name}</Text>
              </Card.Header>
              <Card.Image
                src={product.image}
                objectFit="cover"
                width="100%"
                height={340}
                alt={product.name}
              />
              <Card.Body>
                <Text>{product.description}</Text>
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text b>{product.price}</Text>
                  <Link
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Alibaba
                  </Link>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
}
