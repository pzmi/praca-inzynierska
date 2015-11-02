#!/bin/bash

files=$(ls [1-9]*.md)

for file in $files; do
	base=$(basename $file .md)

	pandoc $file -o ${base}.tex
done

pdflatex praca.tex
bibtex praca
pdflatex praca.tex
pdflatex praca.tex