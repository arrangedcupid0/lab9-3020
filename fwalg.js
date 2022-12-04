/*the best, worst, and average cases should all be big theta/big omega/big O of n^3
because that triple nested loop is n^3 and there is no condition that short circuits 
it to make it run in any less time.
*/

function allPairsShortestPaths(graph)
{
	if(graph.length == 0)
	{
		return [];
	}

	var inf = 99999999983999;
	var dist = [];
	for(var i = 0; i < graph.length; i++)
	{
		var tmp = [];
		for(var j = 0; j < graph.length; j++)
		{
			tmp.push(inf);
		}
		dist.push(tmp);
	}

	for(var k = 0; k < dist.length; k++)
	{
		dist[k][k] = 0;
	}

	for(var l = 0; l < graph.length; l++)
	{
		for(var m = 0; m < graph[l].length; m++)
		{
			dist[l][m] = graph[l][m];
		}
	}

//console.table(dist);
	for(var inter = 0; inter < graph.length; inter++)
	{
		for(var first = 0; first < graph.length; first++)
		{
			for(var last = 0; last < graph.length; last++)
			{
				if(dist[first][last] > dist[first][inter] + dist[inter][last])
				{
					dist[first][last] = dist[first][inter] + dist[inter][last];
				}
			}
		}
	}
	return dist;
}

function rand(size) //this is my automatic matrix generator. there may be many like it but this one is mine
{
	var save = size;
	var count = 0;
	var all = [];
	while(size > 0)
	{
		var arr = [0];
		for(var j = 0; j < count; j++)
		{
			arr.push(0);
		}
		count++;
		for(var i = 1; i < size; i++)
		{
			arr.push(Math.floor(Math.random() * (5 * size) + 10));
		}
		all.push(arr);
		size--;
	}

	for(var i = 0; i < all.length; i++)
	{
		for(var j = 0; j < all[i].length; j++)
		{
			if((all[i][j] === 0) && (i != j))
			{
				all[i][j] = Math.floor(Math.random() * (4 * save) + 10);
			}
		}
	}
//	console.table(all);
	return all;
}

function testThisBS()
{
	var graph = rand(3);
	console.log(allPairsShortestPaths(graph));
	graph = rand(4);
	console.log(allPairsShortestPaths(graph));
	graph = rand(5);
	console.log(allPairsShortestPaths(graph));
	graph = rand(6);
	console.log(allPairsShortestPaths(graph));
	graph = rand(2);
	console.log(allPairsShortestPaths(graph));
}

testThisBS();
