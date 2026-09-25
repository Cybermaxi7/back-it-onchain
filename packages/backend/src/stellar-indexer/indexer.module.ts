import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Call } from './entities/call.entity';
import { StakeActivity } from '../calls/stake-activity.entity';
import { StellarIndexerService } from './services/stellar-indexer.service';
import { BaseIndexerService } from './services/base-indexer.service';
import { MultiChainIndexerService } from './services/multi-chain-indexer.service';
import { LedgerCheckpointService } from './services/ledger-checkpoint.service';
import { CallEventStoreService } from './services/call-event-store.service';
import { DiagnosticParserService } from './services/diagnostic-parser.service';
import { IndexerController } from './controllers/indexer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Call, StakeActivity])],
  providers: [
    StellarIndexerService,
    BaseIndexerService,
    MultiChainIndexerService,
    LedgerCheckpointService,
    CallEventStoreService,
    DiagnosticParserService,
  ],
  controllers: [IndexerController],
  exports: [
    StellarIndexerService,
    BaseIndexerService,
    MultiChainIndexerService,
    LedgerCheckpointService,
    CallEventStoreService,
    DiagnosticParserService,
  ],
})
export class IndexerModule {}
