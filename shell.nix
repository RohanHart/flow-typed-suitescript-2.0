let
  pkgs = import (builtins.fetchGit {
    url = git://github.com/NixOS/nixpkgs-channels;
    ref = "nixos-19.09";
  }) {};
in
  pkgs.mkShell {
    buildInputs = [
      pkgs.nodejs-slim
      pkgs.yarn
      pkgs.flow
    ];
  }
