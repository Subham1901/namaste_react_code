import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import { IMG_CDN_URL } from "./config";
import NONVEG from "../assets/nonveg.png";
import VEG from "../assets/veg.png";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
export default function Catgories({ catgories }) {
  const dispatch = useDispatch();
  const addToCart = ({ id, name, image, price, qty }) => {
    dispatch(addItem({ id, name, image, price, qty }));
  };
  return (
    <>
      {catgories &&
        catgories.map((cat) => (
          <Accordion
            reduceMotion
            w={["280", "xs", "sm", "md", "2xl"]}
            key={cat.title}
            allowMultiple
            defaultIndex={[0]}
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" fontWeight={"bold"} flex="1" textAlign="left">
                    {cat?.title} ({cat?.itemCards.length})
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              {cat?.itemCards.map((menu) => (
                <AccordionPanel
                  borderBottom={"1px solid #E5E4E2"}
                  key={menu?.card?.info?.id}
                >
                  <Box
                    display={"flex"}
                    justifyContent="space-between"
                    alignItems={"center"}
                  >
                    <Box display={"flex"} flexDirection="column">
                      <Box>
                        <Image
                          objectFit={"cover"}
                          w={5}
                          src={
                            menu?.card?.info?.itemAttribute?.vegClassifier ===
                            "NONVEG"
                              ? NONVEG
                              : VEG
                          }
                        />
                      </Box>
                      <Box fontWeight={"semibold"}>
                        {menu?.card?.info?.name}
                      </Box>
                      <Box>
                        ₹{" "}
                        {menu?.card?.info?.price
                          ? menu?.card?.info?.price / 100
                          : menu?.card?.info?.defaultPrice / 100}
                      </Box>
                      <Box mt={5}>
                        <Button
                          onClick={() =>
                            addToCart({
                              id: menu?.card?.info?.id,
                              name: menu?.card?.info?.name,
                              image: menu?.card?.info?.imageId,
                              price:
                                menu?.card?.info?.price / 100 ||
                                menu?.card?.info?.defaultPrice / 100,
                              qty: 1,
                            })
                          }
                          border={"1px solid #e5e5e2"}
                          w={"100"}
                          shadow={"lg"}
                          bgColor="white"
                          color={"green.500"}
                        >
                          ADD
                        </Button>
                      </Box>

                      <Box
                        fontSize={13}
                        color="gray.500"
                        mt={5}
                        w={["200", "250", "330", "370", "500"]}
                      >
                        {menu?.card?.info?.description}
                      </Box>
                    </Box>

                    {menu?.card?.info?.imageId && (
                      <Image
                        mt={2}
                        width={150}
                        borderRadius="md"
                        objectFit={"cover"}
                        alt="image"
                        src={`${IMG_CDN_URL}${menu?.card?.info?.imageId}`}
                      />
                    )}
                  </Box>
                </AccordionPanel>
              ))}
            </AccordionItem>
          </Accordion>
        ))}
    </>
  );
}
