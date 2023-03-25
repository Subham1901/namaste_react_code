import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Divider,
  Text,
  Button,
} from "@chakra-ui/react";
import { IMG_CDN_URL } from "./config";
import NONVEG from "../assets/nonveg.png";
import VEG from "../assets/veg.png";
import Catgories from "./Catgories";
export default function MenuItems({ catgories, title, menu, carousel }) {
  return (
    <>
      <Accordion
        reduceMotion
        shadow={"md"}
        allowMultiple
        defaultIndex={[0]}
        mt={5}
        w={["xs", "sm", "md", "lg", "3xl"]}
      >
        {title && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  fontWeight={"extrabold"}
                  flex="1"
                  textAlign="left"
                >
                  {title} {menu ? <span>({menu.length})</span> : ""}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            {catgories ? (
              <AccordionPanel key={menu?.card?.info?.id}>
                <Catgories catgories={catgories} />
              </AccordionPanel>
            ) : (
              menu &&
              menu.map((menu) => (
                <>
                  <AccordionPanel
                    borderBottom={"1px solid #E5E4E2"}
                    key={menu?.card?.info?.id}
                    pb={4}
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
                          ₹
                          {menu?.card?.info?.price
                            ? menu?.card?.info?.price / 100
                            : menu?.card?.info?.defaultPrice / 100}
                        </Box>

                        <Box
                          fontSize={13}
                          color="gray.500"
                          mt={5}
                          w={["200", "250", "330", "370", "500"]}
                        >
                          {menu?.card?.info?.description}
                        </Box>
                        <Box mt={5}>
                          <Button
                            border={"1px solid #e5e5e2"}
                            w={"100"}
                            shadow={"lg"}
                            bgColor="white"
                            color={"green.500"}
                          >
                            ADD
                          </Button>
                        </Box>
                      </Box>

                      <Box>
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
                    </Box>
                  </AccordionPanel>
                </>
              ))
            )}
          </AccordionItem>
        )}
      </Accordion>
    </>
  );
}
