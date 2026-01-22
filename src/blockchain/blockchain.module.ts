import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockchainIndexerService } from './blockchain-indexer.service';
import { ProcessedEvent, TokenBalance, IndexerCheckpoint } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProcessedEvent, TokenBalance, IndexerCheckpoint]),
  ],
  providers: [BlockchainIndexerService],
  exports: [BlockchainIndexerService],
})
export class BlockchainModule {}