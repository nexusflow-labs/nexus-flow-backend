import { MemberRole } from './member.entity';

export interface UserInfo {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
}

export interface MemberWithUserProps {
  id: string;
  userId: string;
  workspaceId: string;
  role: MemberRole;
  user: UserInfo;
}

export class MemberWithUser {
  private props: MemberWithUserProps;

  private constructor(props: MemberWithUserProps) {
    this.props = props;
  }

  public static create(props: MemberWithUserProps): MemberWithUser {
    return new MemberWithUser(props);
  }

  get id() {
    return this.props.id;
  }
  get userId() {
    return this.props.userId;
  }
  get workspaceId() {
    return this.props.workspaceId;
  }
  get role() {
    return this.props.role;
  }
  get user() {
    return this.props.user;
  }
}
