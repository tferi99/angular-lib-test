set LIB_DIST=dist-lib
mkdir %LIB_DIST%
mklink /D %LIB_DIST%\dev  ..\..\monorepo-client1-and-lib\dist\dev
mklink /D %LIB_DIST%\my-lib ..\..\monorepo-client1-and-lib\dist\my-lib
pause
		