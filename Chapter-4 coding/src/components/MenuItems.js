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
import Catgories from "./Catgories";
export default function MenuItems({ catgories, title, menu, carousel }) {
  console.log(carousel);
  return (
    <>
      {menu && menu.length >= 1 && (
        <Accordion defaultIndex={[0]} w={["sm", "md", "3xl"]} allowToggle>
          {title && (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" fontWeight={"bold"} flex="1" textAlign="left">
                    {title} ({menu && menu.length})
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              {catgories ? (
                <AccordionPanel key={menu?.card?.info?.id} pb={4}>
                  <Catgories catgories={catgories} />
                </AccordionPanel>
              ) : (
                menu &&
                menu.map((menu) => (
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
                ))
              )}
            </AccordionItem>
          )}
        </Accordion>
      )}
    </>
  );
}
