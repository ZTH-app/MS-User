import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Userdb>;

@Schema()
export class Userdb {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  birthday: Date;

  @Prop({ required: true})
  mail: string
}

export const UserSchema = SchemaFactory.createForClass(Userdb);