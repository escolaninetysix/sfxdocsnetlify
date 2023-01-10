open INFILE, "thisindexdata.json";
$uploadbyteslimit = 90000;
$uploadfilecounter=0;
$outputfileprefix="outputsearch";
$outputfilesuffix=".json";
$outputlineaccumulator="";
while ($line = <INFILE>)
{
	print length($line)."\n";
	if (length($outputlineaccumulator)+length($line) > $uploadbyteslimit)
	{
		#Output
		$thisfilenameout=$outputfileprefix.$uploadfilecounter.$outputfilesuffix;
		print "outputting".$thisfilenameout."\n";
		
		#trim }, off last line
		$outputlineaccumulator =~ s/, $//;
		open OUTFILE, '>'.$thisfilenameout;
		print OUTFILE $outputlineaccumulator;
		print $outputlineaccumulator;
		close OUTFILE;
		#Then reset for next round
		$uploadfilecocunter+=1;
		$outputlineaccumulator="";
		$uploadfilecounter+=1;
	}
	else
	{
		$outputlineaccumulator.=$line;
		print (length($outputlineaccumulator));
	}
}
close INFILE;