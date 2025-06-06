import { names, Tree } from '@nx/devkit';
import process from 'node:process';

import { posixPath } from '../../../utils/path';
import { GeneratorDirectoryFormat } from '../../generator.model';
import { getLibraryFrameworkByName, getLibraryRootByName } from '../../generator.utils';
import { ComponentGeneratorOptions } from '../model';
import { ComponentGeneratorSchema } from '../schema';

export function getOptions(tree: Tree, schema: ComponentGeneratorSchema): ComponentGeneratorOptions {
  const libraryRoot = getLibraryRootByName(tree, schema.project);
  const absoluteComponentDirectory = getAbsoluteComponentDirectory(schema, libraryRoot, tree.root);

  return {
    ...names(schema.name),
    framework: getLibraryFrameworkByName(tree, schema.project),
    story: schema.story,
    export: schema.export,
    libraryRoot,
    absoluteComponentDirectory,
    relativeComponentDirectory: getRelativeComponentDirectory(absoluteComponentDirectory, libraryRoot),
  };
}

function getAbsoluteComponentDirectory(schema: ComponentGeneratorSchema, libraryRoot: string, workspaceRoot: string) {
  return schema.directoryFormat === GeneratorDirectoryFormat.AsProvided
    ? posixPath.join(posixPath.relative(workspaceRoot, process.cwd()), schema.directory, schema.name)
    : posixPath.join(libraryRoot, schema.directory, schema.name);
}

function getRelativeComponentDirectory(absoluteComponentDirectory: string, libraryRoot: string) {
  return posixPath.relative(libraryRoot, absoluteComponentDirectory);
}
