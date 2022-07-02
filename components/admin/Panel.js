import { useColorModeValue, Box, Heading } from '@chakra-ui/react'
import React from 'react'

function Panel({childred, title}) {
    const bgBox = useColorModeValue("white", "gray.300")
    const textColor = useColorModeValue("gray.500", "gray.600")
    const bgPanel = useColorModeValue("white", "gray.600")
    const textPanel = useColorModeValue("gray.500", "gray.300")
    const bgHeader = useColorModeValue('#f8f9fc', 'gray.500')
    const textHeader = useColorModeValue('#4e73df','gray.200')
  return (
    <Box bg={bgBox} border={"1px"} borderColor="gray.200" shadow="xl" rounded="md" >
        <Box p={4} bg={bgHeader} roundedTop={"md"} color={textColor} borderBottom={"1px"} borderColor="gray.200">
            <Heading fontSize="16px" fontWeight={"bold"} color={textHeader}>{title || ''}</Heading>
        </Box>
        <Box p={4} bg={bgPanel} color={textPanel} roundedBottom={"md"}>
        Sunt non sit ea consectetur qui laborum minim occaecat ex eiusmod elit cupidatat reprehenderit eu. Commodo ipsum minim anim incididunt ea minim voluptate ea amet id veniam magna cupidatat ut. Excepteur duis mollit ullamco est. Laboris eu Lorem proident veniam fugiat eu ad ea consectetur irure. Qui cillum velit officia in dolor deserunt magna Lorem. Minim non in nulla anim cupidatat exercitation culpa eu mollit duis nulla reprehenderit voluptate do.

Veniam sint incididunt do irure. Ad do aliqua elit sunt tempor tempor et Lorem anim ut. Amet aute id nisi pariatur nisi reprehenderit dolore fugiat. Deserunt ipsum non in laborum consequat Lorem eiusmod irure cillum commodo. Deserunt irure Lorem commodo adipisicing laboris do Lorem ad labore adipisicing duis deserunt incididunt. Eu ipsum ut id id dolor. Cupidatat nisi reprehenderit pariatur ut laboris non esse magna enim velit ex id eiusmod consectetur.

Aute esse reprehenderit enim commodo sit aliqua incididunt minim id elit nulla veniam. Sit sint voluptate sit amet aliquip elit duis culpa labore reprehenderit pariatur consequat. Dolore aliqua cillum ex velit ut est. Veniam exercitation exercitation nostrud consectetur sit est. Amet labore cupidatat anim exercitation mollit incididunt in ipsum commodo. Ullamco consequat laborum ad nisi do id est elit pariatur ut reprehenderit. Ullamco sit laboris amet reprehenderit dolore proident.

Nulla fugiat commodo ullamco consectetur amet irure commodo ea esse occaecat. Deserunt tempor aute nostrud anim laborum dolore proident est ea officia qui ex aute irure. Excepteur eiusmod eiusmod amet voluptate laborum irure culpa consequat. Exercitation ex quis sit anim. Do nulla aliquip non cupidatat non aliqua consectetur. Dolore elit pariatur irure et laboris dolore eu consequat dolore culpa magna reprehenderit. Nostrud labore reprehenderit non sit.

Dolore pariatur tempor veniam dolor dolore nulla sint consequat mollit magna officia eiusmod. In minim nulla incididunt Lorem aliqua nostrud voluptate. Labore tempor minim minim cillum ea voluptate aute aliquip. Elit irure labore est ea occaecat aute in excepteur reprehenderit ut ex. Id exercitation dolore occaecat adipisicing commodo sint Lorem cillum sunt aliqua. Amet nulla Lorem id officia in exercitation ad aliquip nulla sunt.

Voluptate culpa do fugiat sunt anim non velit aute pariatur Lorem voluptate. Ad veniam qui irure occaecat qui enim irure veniam aliqua sunt duis laboris ea. Aliquip amet ullamco reprehenderit eu nisi velit in veniam. In aute incididunt enim aliquip Lorem eu.
</Box>
    </Box>
  )
}

export default Panel