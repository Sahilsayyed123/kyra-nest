import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  company_code: string;
  @Column()
  country: string;
  @Column()
  credit: number;
  @Column()
  dscConfig: number;
  @Column()
  coolOffPeriod: number;
  @Column()
  perInvoicePrice: number;
  @Column()
  creator: string;
  @Column({ type: 'json', nullable: true })
  mailKeywordConfig: any;
  @Column()
  owner: number;
  @Column()
  emailConfigId: number;
  @Column()
  unprocesed: number;
  @Column()
  duplicate: number;
  @Column()
  mailbox: number;
  @Column()
  procesed: number;
  @Column()
  completed: number;
  @Column({ type: 'json', nullable: true })
  invocieCancellationKeywords: any;
  @Column({ type: 'json', nullable: true })
  performainvoice: any;
}
