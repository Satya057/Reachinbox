import { useState } from "react";
import { Details } from "./Details";
import { Inbox } from "./Inbox";
import { NoContent } from "./NoContent"
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { AboutEmail } from "./AboutEmail";
 
  
export const Content = ({data, contentName}) =>{
  const { colorMode, toggleColorMode } = useColorMode();
  // const [emails, setEmails] = useState(data);

    return (
        <Box>
             
            {(contentName == 'Mail')?<Flex>
                <Inbox emails = {data} />
                <Box
                w="60%" 
                bgColor={colorMode=="light" ?"White":"black"}
                >
                  <AboutEmail  />

                </Box>
                <Details data = {data}  />
            </Flex>

            :<NoContent />}
        </Box>
    )
}