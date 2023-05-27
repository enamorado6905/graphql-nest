export abstract class BaseService {
  /**
   * This action find all elements in the collection
   * @param searchUserDto
   * @returns
   */
  async findAll(searchUserDto: any): Promise<any> {
    return { searchUserDto };
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
   * @returns
   */
  async create(createDto: any): Promise<any> {
    return { ...createDto };
  }

  /**
   * This action update an element
   * @param id
   * @param updateDto
   * @returns
   */
  async update(id: string, updateDto: any): Promise<any> {
    return { id, updateDto };
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
