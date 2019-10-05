# SAP HANA .xsjs module
SAP HANA test files

### Creation of process.xsjs to call flowgraph stored procedure in node01/lib/xsjs folder
+ Purpose is to execute .bat files to load new data files and archive older files
+ Folder and code structure for reference
+ `prepareCall()` method is only available in **DB** connection class. With **HDB** connection we need to used `loadProcedure()` to call a procedure.

