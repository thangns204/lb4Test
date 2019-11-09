import {DefaultCrudRepository, repository} from '@loopback/repository';
import {Comment, CommentRelations} from '../models';
import {TestDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {PostRepository} from './post.repository';

export class CommentRepository extends DefaultCrudRepository<
  Comment,
  typeof Comment.prototype.id,
  CommentRelations
> {
  constructor(
    @inject('datasources.test') dataSource: TestDataSource,
    @repository(PostRepository)
    public postRepository: PostRepository
  ) {
    super(Comment, dataSource);
  }
}
