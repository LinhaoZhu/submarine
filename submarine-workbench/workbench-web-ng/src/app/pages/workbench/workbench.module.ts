/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkbenchRoutingModule } from '@submarine/pages/workbench/workbench-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { InterpreterComponent } from './interpreter/interpreter.component';
import { JobComponent } from './job/job.component';
import { ModelComponent } from './model/model.component';
import { WorkbenchComponent } from './workbench.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [
    WorkbenchComponent,
    HomeComponent,
    WorkspaceComponent,
    InterpreterComponent,
    JobComponent,
    DataComponent,
    ModelComponent
  ],
  imports: [
    CommonModule,
    WorkbenchRoutingModule,
    NgZorroAntdModule,
    RouterModule
  ]
})
export class WorkbenchModule {
}
