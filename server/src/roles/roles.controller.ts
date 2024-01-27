import { Controller, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';

//
@Controller('roles')
export class RolesController {
  //
  constructor(private readonly rolesService: RolesService) {}

  //
  @Get()
  getAllRoles() {
    return this.rolesService.getAllRoles();
  }

  //
  @Get(':id')
  getAllRoleById(@Param('id') id: number) {
    return this.rolesService.getAllRoleById(id);
  }
}
