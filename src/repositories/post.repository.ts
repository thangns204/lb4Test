import {DefaultCrudRepository, repository} from '@loopback/repository';
import {Post, PostRelations} from '../models';
import {TestDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {CommentRepository} from './comment.repository';

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id,
  PostRelations
> {
  constructor(
    @inject('datasources.test') dataSource: TestDataSource,
    @repository(CommentRepository)
    public commentRepository: CommentRepository
  ) {
    super(Post, dataSource);
  }
}
