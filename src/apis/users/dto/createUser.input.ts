import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  nickname: string;

  // Int로 할지 String으로 할지
  @Field(() => String, { nullable: true })
  birth: string;

  @Field(() => String, { nullable: true })
  phone: string;

  @Field(() => String, { nullable: true })
  gender: string;

  @Field(() => String, {
    defaultValue:
      'wetrekking-storage/userProfile/24d860b1-39ce-41fa-8d6b-0c4912ef1d74basic-profile.png',
  })
  profile_img?: string;
}
