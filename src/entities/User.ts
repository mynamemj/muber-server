import bcrypt from bcrypt;
import { IsEmail } from 'class-validator';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";

const BCRYPT_ROUNDS=10;

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', unique: true })
    @IsEmail()
    email: string;

    @Column({ type: 'boolean', default: false })
    verifiedEmail: boolean;

    @Column({ type: 'text' })
    firstName: string;

    @Column({ type: 'text' })
    lastName: string;

    @Column({ type: 'int' })
    age: number;

    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'text' })
    phoneNumber: string;

    @Column({ type: 'boolean', default: false })
    verifiedPhoneNumber: boolean;

    @Column({ type: 'text' })
    profilePhoto: string;



    
    @Column()
    isDriving: boolean;
    @Column()
    isRiding: boolean;
    @Column()
    isTaken: boolean;

    @Column({type:'double precision', default:0})
    lastLng:number;
    @Column({type:'double precision', default:0})
    lastLat:number;
    @Column({type:'double precision', default:0})    
    lastOrientation:number;
    
    @CreateDateColumn() createAt: string;
    @UpdateDateColumn() updateAt: string;
    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    // We are not saving this.password = Promise.
    // We are saving this.password = wait for Promise to give us a string.
    //Promise 는 어떤 요청이 일어나기를 기다리기 위해 사용!
    private hashingPW(password:string):Promise<string>{
        return bcrypt.hash(password,BCRYPT_ROUNDS);
    }
    @BeforeInsert()
    @BeforeUpdate()
    async savePassword():Promise<void> {
        const hashedPW=await this.hashingPW(this.password);
        this.password=hashedPW;
    }
    

}

export default User;