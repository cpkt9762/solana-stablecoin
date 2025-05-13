import { ChakraProvider, Box, Container, Heading, Text, VStack, HStack, Button, useColorModeValue, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <ChakraProvider>
      <Box minH="100vh" bg={bgColor}>
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <HStack justify="space-between" p={4} bg={cardBg} borderRadius="lg" shadow="md">
              <Heading size="lg">USDH Stablecoin</Heading>
              <WalletMultiButton />
            </HStack>

            {/* 系统概览 */}
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem>
                <Box p={6} bg={cardBg} borderRadius="lg" shadow="md">
                  <Stat>
                    <StatLabel>USDH 价格</StatLabel>
                    <StatNumber>$1.00</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      0.1%
                    </StatHelpText>
                  </Stat>
                </Box>
              </GridItem>
              <GridItem>
                <Box p={6} bg={cardBg} borderRadius="lg" shadow="md">
                  <Stat>
                    <StatLabel>总供应量</StatLabel>
                    <StatNumber>1,000,000 USDH</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      5.2%
                    </StatHelpText>
                  </Stat>
                </Box>
              </GridItem>
              <GridItem>
                <Box p={6} bg={cardBg} borderRadius="lg" shadow="md">
                  <Stat>
                    <StatLabel>算力池总量</StatLabel>
                    <StatNumber>100,000 TH/s</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      2.3%
                    </StatHelpText>
                  </Stat>
                </Box>
              </GridItem>
            </Grid>

            {/* 主要功能区域 */}
            <Box p={8} bg={cardBg} borderRadius="lg" shadow="md">
              <VStack spacing={6} align="stretch">
                <Heading size="md">USDH 稳定币系统</Heading>
                <Text>
                  USDH是一个基于Solana区块链的去中心化稳定币系统，由算力支持，具有可编程性。
                </Text>
                
                {/* 系统特点 */}
                <Box>
                  <Heading size="sm" mb={4}>系统特点</Heading>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <Box p={4} borderWidth="1px" borderRadius="md">
                      <Heading size="xs" mb={2}>去中心化</Heading>
                      <Text fontSize="sm">基于区块链技术，无需中心化机构</Text>
                    </Box>
                    <Box p={4} borderWidth="1px" borderRadius="md">
                      <Heading size="xs" mb={2}>算力支持</Heading>
                      <Text fontSize="sm">由矿工算力作为价值支撑</Text>
                    </Box>
                    <Box p={4} borderWidth="1px" borderRadius="md">
                      <Heading size="xs" mb={2}>可编程性</Heading>
                      <Text fontSize="sm">支持智能合约，实现自动化操作</Text>
                    </Box>
                    <Box p={4} borderWidth="1px" borderRadius="md">
                      <Heading size="xs" mb={2}>高流动性</Heading>
                      <Text fontSize="sm">快速交易和结算</Text>
                    </Box>
                  </Grid>
                </Box>

                {/* 操作按钮 */}
                <HStack spacing={4} justify="center">
                  <Button colorScheme="blue" size="lg">铸造 USDH</Button>
                  <Button colorScheme="green" size="lg">赎回 USDH</Button>
                  <Button colorScheme="purple" size="lg">查看算力池</Button>
                </HStack>
              </VStack>
            </Box>

            {/* 市场数据 */}
            <Box p={8} bg={cardBg} borderRadius="lg" shadow="md">
              <VStack spacing={4} align="stretch">
                <Heading size="md">市场数据</Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <Box>
                    <Heading size="sm" mb={4}>24小时交易量</Heading>
                    <Text fontSize="2xl" fontWeight="bold">$500,000</Text>
                    <Text color="green.500">↑ 12.5%</Text>
                  </Box>
                  <Box>
                    <Heading size="sm" mb={4}>活跃用户数</Heading>
                    <Text fontSize="2xl" fontWeight="bold">1,234</Text>
                    <Text color="green.500">↑ 8.3%</Text>
                  </Box>
                  <Box>
                    <Heading size="sm" mb={4}>平均交易时间</Heading>
                    <Text fontSize="2xl" fontWeight="bold">2.5s</Text>
                    <Text color="green.500">↓ 0.5s</Text>
                  </Box>
                  <Box>
                    <Heading size="sm" mb={4}>系统稳定性</Heading>
                    <Text fontSize="2xl" fontWeight="bold">99.9%</Text>
                    <Text color="green.500">↑ 0.1%</Text>
                  </Box>
                </Grid>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App
