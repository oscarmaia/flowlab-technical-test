import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma-service';

@Controller('products')
export class ProductsController {
  constructor(private readonly prismaService: PrismaService) {}
  @Post()
  async addProduct() {
    await this.prismaService.product.create({
      data: {
        description:
          'Sapatenis Masculino Marrom Tênis Casual FLOW para Dia a Dia - Camurça',
        image:
          'https://s3-alpha-sig.figma.com/img/006a/8653/3fd45771ef0ab8e8b4230c22de407513?Expires=1694995200&Signature=BEn3fwf5xlWUjqwSVKlhygdvddiaIjo6sdMqYkp2xG-Zp55hyjKgtozfwNufKh98r8cU~7hd5LyWa6trYJCwwyzBzIkhRxnm2T4-fm~UQiu47ILnO10bpWDbqb--tF58XT~uPK-MV9IjTjZC6EzRYxLfurKRczlPlOTwiulXL3GYL6dy5hzyeTw9cTBEWL99XBmNeKePsigu58MfZYFQAk2z0ud88EeTccRVxPppU-BzFbqZLJ6zJIHWbWBaKppnkHjH8mF1dm0JgfdQJlgqsx~kSl3m0DrRW7d~ansMzAeG3IG-6oE0BW6Bx2Qb5AQ~q94lN87lGIrcLKh84zjh-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        price: 28000,
        name: 'Tênis Marrom',
      },
    });
  }

  @Post('discount')
  async addDiscount() {
    await this.prismaService.discount.create({
      data: {
        amount: 10,
        productId: 1,
      },
    });
  }

  @Get()
  async getProduct() {
    return await this.prismaService.product.findMany({
      where: { id: 1 },
      include: { discount: true },
    });
  }
}
