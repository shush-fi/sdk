with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "nodejs-pnpm";
    buildInputs = [
        nodejs
        nodePackages.pnpm
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
        pnpm install
    '';
}
