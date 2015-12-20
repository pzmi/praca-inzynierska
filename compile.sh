#!/bin/bash

files=$(ls [1-9]*.md)

for file in $files; do
	base=$(basename $file .md)

	pandoc $file -o ${base}.tex --listings
done

pdflatex praca
biber praca
pdflatex praca
pdflatex praca
