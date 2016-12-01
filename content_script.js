walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;


	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bpro-life\b/g, "anti-choice");
	v = v.replace(/\bpro life\b/g, "anti-choice");
	v = v.replace(/\bPro Life\b/g, "Anti-choice");
	v = v.replace(/\bPro-Life\b/g, "Anti-choice");
	v = v.replace(/\bPro-life\b/g, "Anti-choice");
	v = v.replace(/\bPro life\b/g, "Anti-choice");
	v = v.replace(/\bProLife\b/g, "Anti-Choice");


	textNode.nodeValue = v;
}
