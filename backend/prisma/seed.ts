import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Testando conexão com o banco de dados...')
  try {
    await prisma.$connect()
    console.log('Conexão bem sucedida!')
  } catch (error) {
    console.error('Erro ao conectar:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 