import { useState } from 'react'
import { 
  ChakraProvider, 
  Box, 
  Container, 
  Heading, 
  Text, 
  Flex, 
  HStack, 
  Button, 
  Grid, 
  GridItem, 
  NumberInput,
  useToast,
  createMultiStyleConfigHelpers,
  defineStyle
} from '@chakra-ui/react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { createTheme } from '@chakra-ui/theme-utils'

const theme = createTheme({})

function App() {
  const [mintAmount, setMintAmount] = useState('')
  const [redeemAmount, setRedeemAmount] = useState('')
  const [hashrate, setHashrate] = useState('')
  const toast = useToast()

  // 模拟数据
  const mockData = {
    price: 1.00,
    totalSupply: 1000000,
    hashratePool: 100000,
    userBalance: 5000,
    userHashrate: 5000
  }

  const handleMint = () => {
    if (!mintAmount) {
      toast({
        title: '请输入数量',
        status: 'error',
        duration: 2000,
      })
      return
    }
    toast({
      title: '铸造成功',
      description: `成功铸造 ${mintAmount} USDH`,
      status: 'success',
      duration: 2000,
    })
    setMintAmount('')
  }

  const handleRedeem = () => {
    if (!redeemAmount) {
      toast({
        title: '请输入数量',
        status: 'error',
        duration: 2000,
      })
      return
    }
    toast({
      title: '赎回成功',
      description: `成功赎回 ${redeemAmount} USDH`,
      status: 'success',
      duration: 2000,
    })
    setRedeemAmount('')
  }

  const handleStakeHashrate = () => {
    if (!hashrate) {
      toast({
        title: '请输入算力',
        status: 'error',
        duration: 2000,
      })
      return
    }
    toast({
      title: '质押成功',
      description: `成功质押 ${hashrate} TH/s 算力`,
      status: 'success',
      duration: 2000,
    })
    setHashrate('')
  }

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.50">
        <Container maxW="container.xl" py={8}>
          <Flex direction="column" gap={8}>
            {/* Header */}
            <HStack justify="space-between" p={4} bg="white" borderRadius="lg" shadow="md">
              <Heading size="lg">USDH Stablecoin</Heading>
              <WalletMultiButton />
            </HStack>

            {/* 用户数据 */}
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <Box p={6} bg="white" borderRadius="lg" shadow="md">
                  <Text fontSize="sm" color="gray.500">我的 USDH 余额</Text>
                  <Text fontSize="2xl" fontWeight="bold">{mockData.userBalance} USDH</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box p={6} bg="white" borderRadius="lg" shadow="md">
                  <Text fontSize="sm" color="gray.500">我的算力</Text>
                  <Text fontSize="2xl" fontWeight="bold">{mockData.userHashrate} TH/s</Text>
                </Box>
              </GridItem>
            </Grid>

            {/* 铸造 USDH */}
            <Box p={8} bg="white" borderRadius="lg" shadow="md">
              <Flex direction="column" gap={4}>
                <Heading size="md">铸造 USDH</Heading>
                <Text>质押算力来铸造 USDH</Text>
                <HStack>
                  <NumberInput min={0} value={mintAmount} onChange={setMintAmount}>
                    <NumberInputField placeholder="输入要铸造的 USDH 数量" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button colorScheme="blue" onClick={handleMint}>铸造</Button>
                </HStack>
              </Flex>
            </Box>

            {/* 赎回 USDH */}
            <Box p={8} bg="white" borderRadius="lg" shadow="md">
              <Flex direction="column" gap={4}>
                <Heading size="md">赎回 USDH</Heading>
                <Text>赎回 USDH 获取算力</Text>
                <HStack>
                  <NumberInput min={0} value={redeemAmount} onChange={setRedeemAmount}>
                    <NumberInputField placeholder="输入要赎回的 USDH 数量" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button colorScheme="green" onClick={handleRedeem}>赎回</Button>
                </HStack>
              </Flex>
            </Box>

            {/* 质押算力 */}
            <Box p={8} bg="white" borderRadius="lg" shadow="md">
              <Flex direction="column" gap={4}>
                <Heading size="md">质押算力</Heading>
                <Text>直接质押算力到系统</Text>
                <HStack>
                  <NumberInput min={0} value={hashrate} onChange={setHashrate}>
                    <NumberInputField placeholder="输入要质押的算力 (TH/s)" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button colorScheme="purple" onClick={handleStakeHashrate}>质押</Button>
                </HStack>
              </Flex>
            </Box>

            {/* 市场数据 */}
            <Box p={8} bg="white" borderRadius="lg" shadow="md">
              <Flex direction="column" gap={4}>
                <Heading size="md">市场数据</Heading>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  <Box>
                    <Text fontSize="sm" color="gray.500">USDH 价格</Text>
                    <Text fontSize="2xl" fontWeight="bold">${mockData.price}</Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="gray.500">总供应量</Text>
                    <Text fontSize="2xl" fontWeight="bold">{mockData.totalSupply.toLocaleString()} USDH</Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="gray.500">算力池总量</Text>
                    <Text fontSize="2xl" fontWeight="bold">{mockData.hashratePool.toLocaleString()} TH/s</Text>
                  </Box>
                </Grid>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App
