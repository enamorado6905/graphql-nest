export abstract class BaseService {
  /**
   * This action find all elements in the collection
   * @param searchUserDto
   * @returns
   */
  async find(searchUserDto: any): Promise<any> {
    return { searchUserDto };
  }

  /**
   * This action returns an element by id
   * @param id
   * @returns
   */
  async findById(id: string): Promise<any> {
    return id;
  }

  /**
   * This action returns an element by filter
   * @param filter
   * @returns
   */
  async findOne(filter: object): Promise<any> {
    return filter;
  }

  /**
   * This action adds a new element
   * @param createDto
   * @param authUser
   * @returns
   */
  async create(createDto: any, authUser?: any): Promise<any> {
    return { ...createDto, authUser };
  }

  /**
   * This action update an element
   * @param id
   * @param updateDto
   * @param authUser
   * @returns
   */
  async update(id: string, updateDto: any, authUser?: any): Promise<any> {
    return { id, updateDto, authUser };
  }

  /**
   * This action remove an element
   * @param id
   * @returns
   */
  async remove(id: string): Promise<any> {
    return id;
  }
}
