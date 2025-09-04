// import {
//   Table,
//   Column,
//   DataType,
//   Unique,
//   Default,
//   AllowNull,
//   BeforeCreate,
//   HasMany,
// } from 'sequelize-typescript';
// import { BaseModel } from 'src/core/database/BaseModel';
// import Encryption from 'src/core/utils/encryption';

// @Table({ timestamps: true, tableName: 'users', underscored: true, paranoid: true })
// export default class User extends BaseModel<User> {
//   @AllowNull(true)
//   @Column(DataType.STRING)
//   user_name: string;

//   @AllowNull(true)
//   @Column(DataType.STRING)
//   profile_url: string;

//   @AllowNull(true)
//   @Column(DataType.STRING)
//   email_id: string;

//   @Column({
//     type: DataType.STRING,
//     set(value: string) {
//       this.setDataValue(
//         'password',
//         value ? Encryption.hashPassword(value) : null,
//       );
//     },
//   })
//   password: string;

//   @AllowNull(true)
//   @Column({
//     type: DataType.STRING,
//   })
//   mobile_no: string;

//   @AllowNull(false)
//   @Default(false)
//   @Column(DataType.BOOLEAN)
//   email_verified: boolean;

//   @AllowNull(true)
//   @Column(DataType.STRING(15))
//   gender: string;

//   @AllowNull(true)
//   @Column(DataType.DATEONLY)
//   dob: Date;

//   @Column(DataType.DATE)
//   last_login: Date;

//   @AllowNull(true)
//   @Column(DataType.TEXT)
//   device_token: string;

//   @AllowNull(false)
//   @Default(false)
//   @Column(DataType.BOOLEAN)
//   is_blocked: boolean;

// }

// src/modules/users/entities/user.entity.ts

import { Entity, Column, BeforeInsert, JoinColumn,ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import Encryption from 'src/core/utils/encryption';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export default class User  {

   @PrimaryGeneratedColumn('increment')
    id!: number;

  @Column({ type: 'varchar', unique: true })
  email_id: string;

  @Exclude()
  @Column({ type: 'varchar', select: true })
  password: string;

   @Column({ type: 'boolean', default: false })
  is_delete: boolean;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at?: Date;

  
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = Encryption.hashPassword(this.password);
    }
  }


}

