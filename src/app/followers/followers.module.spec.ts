import { FollowersModule } from './followers.module';

describe('FollowersModule', () => {
  let followersModule: FollowersModule;

  beforeEach(() => {
    followersModule = new FollowersModule();
  });

  it('should create an instance', () => {
    expect(followersModule).toBeTruthy();
  });
});
