initSidebarItems({"enum":[["Access",""],["Adt","A Data Type"],["AssocItem","Invariant: `inner.as_assoc_item(db).is_some()` We do not actively enforce this invariant."],["AssocItemContainer",""],["AttrDef",""],["BuiltinType",""],["CallableKind",""],["DefWithBody","The defs which have a body."],["FieldSource",""],["GenericDef",""],["MacroCallId","`MacroCallId` identifies a particular macro invocation, like `println!(\"Hello, {}\", world)`."],["ModuleDef","The defs which can be visible in the module."],["ModuleSource",""],["Mutability",""],["Origin",""],["PathResolution",""],["ScopeDef","For IDE only"],["StructKind",""],["TypeRef","Compare ty::Ty"],["VariantDef",""],["Visibility","Visibility of an item, with the path resolved."]],"fn":[["original_range",""]],"mod":[["db","FIXME: write short doc here"],["diagnostics","FIXME: write short doc here"]],"struct":[["Attrs",""],["Callable",""],["Const",""],["Crate","hir::Crate describes a single crate. It's the main interface with which a crate's dependencies interact. Mostly, it should be just a proxy for the root module."],["CrateDependency",""],["Documentation","Holds documentation"],["Enum",""],["EnumVariant",""],["ExprScopes",""],["Field",""],["Function",""],["HirFileId","Input to the analyzer is a set of files, where each file is identified by `FileId` and contains source code. However, another source of source code in Rust are macros: each macro can be thought of as producing a \"temporary file\". To assign an id to such a file, we use the id of the macro call that produced the file. So, a `HirFileId` is either a `FileId` (source code written by user), or a `MacroCallId` (source code produced by macro)."],["ImplDef",""],["InFile","`InFile<T>` stores a value of `T` inside a particular file/syntax tree."],["Local",""],["MacroCallLoc",""],["MacroDef",""],["MacroDefId",""],["MacroFile",""],["ModPath",""],["Module",""],["Name","`Name` is a wrapper around string, which is used in hir for both references and declarations. In theory, names should also carry hygiene info, but we are not there yet!"],["Semantics","Primary API to get semantic information, like types, from syntax trees."],["SemanticsScope",""],["Static",""],["Struct",""],["Trait",""],["Type",""],["TypeAlias",""],["TypeParam",""],["Union",""]],"trait":[["AsAssocItem",""],["Docs",""],["HasAttrs",""],["HasSource",""],["HasVisibility",""],["HirDisplay",""]]});