import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, IncQty, removeItem, DecQty } from "../utils/cartSlice";
import { IMG_CDN_URL } from "./config";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import about from "../assets/about.jpg";

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0
  );
  const totalQty = cart.reduce((prev, curr) => prev + curr.qty, 0);
  const dispatch = useDispatch();
  const clearAllCartData = () => {
    dispatch(clearCart());
  };
  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <Container maxW={"container.lg"}>
      <Stack
        shadow={"md"}
        p={2}
        display={"flex"}
        flexDirection="row"
        justifyContent={"space-evenly"}
      >
        <Box>
          {cart.length >= 1 ? (
            cart.map((data) => (
              <Box
                m={2}
                display={"flex"}
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  width={150}
                  borderRadius="md"
                  objectFit={"cover"}
                  alt="image"
                  src={`${IMG_CDN_URL}${data.image}`}
                />
                <Box w={"200"}>
                  <Text p={2} fontWeight="medium">
                    {data.name}
                    <Text color={"gray.500"}>Qty: {data.qty}</Text>
                  </Text>
                </Box>

                <Box
                  p={2}
                  display={"flex"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button p={0} onClick={() => dispatch(IncQty(data))}>
                    <AiOutlinePlus size={20} />
                  </Button>
                  <Text p={2}>{data.qty}</Text>
                  {data.qty > 1 ? (
                    <Button p={0} onClick={() => dispatch(DecQty(data))}>
                      <AiOutlineMinus size={20} />
                    </Button>
                  ) : (
                    <Button p={0} onClick={() => removeItemFromCart(data.id)}>
                      <AiFillDelete size={20} />
                    </Button>
                  )}
                </Box>
                <Text fontWeight="medium">{data.price}</Text>
              </Box>
            ))
          ) : (
            <Heading fontWeight={"medium"}>You have no items</Heading>
          )}
          {cart.length >= 1 && (
            <Button m={2} onClick={() => clearAllCartData()} colorScheme="red">
              Clear Cart
            </Button>
          )}
        </Box>
        <Box>
          <Heading fontWeight={"semibold"} fontSize="2xl">
            Order Summary
          </Heading>
          <Divider m={2} />
          <Box display={"flex"} justifyContent="space-between">
            <Text>Quantity </Text>
            <Text>{totalQty}</Text>
          </Box>
          <Box display={"flex"} justifyContent="space-between">
            <Text>Price </Text>
            <Text>{totalPrice}</Text>
          </Box>
          <Divider size={"md"} />
          <Box display={"flex"} justifyContent="space-between">
            <Text fontWeight={"medium"}>TO PAY</Text>
            <Text>{totalPrice}</Text>
          </Box>

          <Button mt={5} colorScheme={"green"}>
            Checkout
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default Cart;
