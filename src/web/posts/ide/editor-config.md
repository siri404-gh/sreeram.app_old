# Configure Editorconfig

#### Sep 1, 2018 by Sreeram Padmanabhan

## Summary

This plugin attempts to override user/workspace settings with settings found in `.editorconfig` files. Below is my configuration.

## Install

Make sure you have installed the editorconfig extension for VS code.

## Configure

Create a file called `.editorconfig` at the root of the project with the following code.

## Code
    ; Unix-style newlines
    [*]
    charset = utf-8
    end_of_line = LF
    indent_size = 2
    indent_style = space
    trim_trailing_whitespace = true
