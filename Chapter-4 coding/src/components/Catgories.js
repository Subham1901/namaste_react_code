import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
} from "@chakra-ui/react";
import { IMG_CDN_URL } from "./config";
import NONVEG from "../assets/nonveg.png";
import VEG from "../assets/veg.png";
export default function Catgories({ catgories }) {
  return (
    <>
      {catgories &&
        catgories.map((cat) => (
          <Accordion
            w={["xs", "sm", "md", "3xl"]}
            key={cat.title}
            allowToggle
            defaultIndex={[0]}
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    fontWeight={"semibold"}
                    flex="1"
                    textAlign="left"
                  >
                    {cat?.title} ({cat?.itemCards.length})
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              {cat?.itemCards.map((menu) => (
                <AccordionPanel key={menu?.card?.info?.id} pb={4}>
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
                      <Box>{menu?.card?.info?.name}</Box>
                      <Box>₹{menu?.card?.info?.price / 100}</Box>
                    </Box>
                    <Image
                      width={150}
                      borderRadius="md"
                      objectFit={"cover"}
                      alt="image"
                      src={`${IMG_CDN_URL}${menu?.card?.info?.imageId}`}
                    />
                  </Box>
                </AccordionPanel>
              ))}
            </AccordionItem>
          </Accordion>
        ))}
    </>
  );
}
