---
layout: page
title: Research
---

On this page, I give some motivation for my research and try to explain what the broader goals are, while relating the contents of my papers (both published and in preparation) to these goals. I am interested in a lot of things in homotopy theory--mostly those with an equivariant flavor--but I'll focus here on one of the main strands at the moment in my research: (connective) higher real $K$-theories. I've aimed this discussion at people who are familiar with chromatic homotopy. For a list of my papers, return to the [home](https://carrickchristian.github.io) page.

## Higher real $K$-theories

In all that follows, we work at the prime $p=2$. Chromatic homotopy theory studies spaces and spectra from the point of view of complex-oriented cohomology theories, those theories that admit Thom isomorphisms for complex vector bundles. On one hand, facts like the nilpotence theorem tell us these theories see quite a lot of information. On the other, for any complex-oriented ring spectrum $R$, the unit map

$$\pi_*S^0\to \pi_*R$$

sends every class in positive degrees to zero, since it factors thru $MU$. If we want to detect classes in the homotopy groups of spheres in this way, we should replace $R$ with theories that are not complex-oriented, such as $L_nS^0$ or $L_{K(n)}S^0$. In fact, chromatic convergence tells us in some sense these latter theories see *everything*. 

So we turn to computing $\pi_*L_{K(n)}S^0$. We start by considering its Adams spectral sequence, but $$H_*(E(n);\mathbb{F}_2)=0$$, so $$H_*(L_nS^0;\mathbb{F}_2)=0$$ since $L_n$ is smashing, and chromatic fracture squares inductively tell us that $$H_*(L_{K(n)}S^0;\mathbb{F}_2)=0$$. Since the Adams spectral sequence therefore gets us nowhere, we try the Adams-Novikov spectral sequence. Here things work much more nicely: the $K(n)$-local $E_n$-based ANSS of the sphere is isomorphic to the (continuous) homotopy fixed point spectral sequence for the action of $\mathbb{G}_n$ (the Morava stabilizer group) on $$\pi_*E_n$$. Even better, the $K(n)$-local $E_n$-based AN resolution is equivalent to the $\mathbb{G}_n$-cobar resolution of $E_n$. In particular, we have the theorem of Devinatz-Hopkins:

$$L_{K(n)}S^0\simeq E_n^{h\mathbb{G}_n}$$

So if we could compute $$H^*(\mathbb{G}_n;\pi_*E_n)$$, we could say lot about $$\pi_*L_{K(n)}S^0$$. However, $\mathbb{G}_n$ is a big profinite group, and the action is defined by the universal property of $$\pi_*E_n$$, so writing down explicit formulas for the action is quite difficult. We can do much better by replacing $\mathbb{G}_n$ with a finite subgroup. 

For example, $\mathbb{G}_n$ contains a canonical copy of $C_2$ given by the formal inverse on the formal group. At height 1, there is an equivalence $E_1\simeq KU^{\hat{}}_2$, and the $C_2$-action corresponds to complex conjugation on $KU$, giving an equivalence $E_1^{hC_2}\simeq KO^{\hat{}}_2$. It is straightforward to write down explicit formulas for the action in this case; one finds that $C_2$ acts by multiplication by $-1$ on the Bott class. The ANSS for $KO$ is then isomorphic to the easily computed HFPSS for this $C_2$ action.

It was an observation of Ravenel and Hopkins-Miller that $L_{K(n)}S^0$ is well approximated by $$EO_n(G):=E_n^{hG}$$ for finite subgroups $G\subset\mathbb{G}_n$, and that these *Hopkins-Miller higher real $K$-theories* are more computable. In fact, $$L_{K(1)}S^0$$ has a finite resolution which reduces the computation of $$\pi_*L_{K(1)}S^0$$ to the tractable computation of $$\pi_*KO$$ described above. At the prime $p=3$, Goerss--Henn--Mahowald--Rezk provided a similar finite resolution consisting of $$EO_n(G)$$ spectra related to $TMF$.

## Hopkins' *From Spectra to Stacks*

Like $KO$, the $EO_n$ theories are not complex-orientable; as above, we see this as a good thing. Hopkins noticed that we can still study non complex-orientable theories from the point of view of algebraic geometry and formal groups via the following relative Spec construction in stacks. For any ring spectrum $E$, we have a Hopf algebroid $$(MU_*E,MU_*(MU\wedge E))$$ and a resulting map of stacks

$$\mathcal{M}_E\to\mathcal{M}_{FG}$$

When $E$ is complex-orientable, this recovers the map

$$Spec(E_*)\to\mathcal{M}_{FG}$$

classifying the formal group on $$E_*$$ discovered by Quillen. In this language, the fact that the $E_2$-page of the ANSS for $KO$ is isomorphic to that of the $$C_2$$-HFPSS for $KU$ becomes the observation that

$$
\begin{align}
\mathcal{M}_{KO}\simeq Spec(KU_*)/C_2
\end{align}
$$

Hopkins provides a modular interpretation of this stack and the map to $\mathcal{M}_{FG}$ in terms of (nonsingular) quadratic equations (see also the last chapter of my [thesis](https://carrickchristian.github.io/main.pdf) for details on this). More generally, one always has an equivalence 

$$
\begin{align}
\mathcal{M}_{EO_n(G)}\simeq Spec(\pi_*E_n)/G
\end{align}
$$


For this, combine Section 6 of [Mathew-Meier](https://arxiv.org/pdf/1311.0514.pdf) with Proposition 6.3.1 in my thesis.

The Landweber exact functor theorem tells us that if 

$$Spec(R)\to\mathcal{M}_{FG}$$

is a flat map of stacks, then there is a complex-oriented ring spectrum lifting this map along the above construction. We may ask if there's a similar statement replacing $Spec(R)$ with a stack. If

$$\mathcal{N}\to\mathcal{M}_{FG}$$

is an affine, flat map, pulling back the cover $$Spec(MU_*)\to \mathcal{M}_{FG}$$ to $$\mathcal{N}$$ gives a cover by affines with flat maps to $$\mathcal{M}_{FG}$$. The corresponding Cech complex gives a cosimplicial diagram of Landweber exact theories. If we could lift this diagram to an infinity category of ring spectra (e.g. the category of $$E_\infty$$-rings), we could take its homotopy limit $E$, and under some mild assumptions, we will have the desired equivalence $$\mathcal{M}_E\simeq\mathcal{N}$$ as stacks over $$\mathcal{M}_{FG}$$.

This leads one directly to *derived stacks*, which very roughly speaking is what you would have if you *could* lift the above diagram to the category of $$E_\infty$$-rings. The Goerss-Hopkins-Miller theorem gives this in the $$EO_n$$ case, refining (2) to an appropriate equivalence of derived stacks. Back to $KO$, the fact that the ANSS of $KO$ is isomorphic to the $$C_2$$-HFPSS of $KU$ (not just on the $$E_2$$-page) is phrased in this language as the fact that (1) lifts to an equivalence of derived stacks, and in particular their descent spectral sequences coincide.

This fact about the $EO_n$'s allows one to reverse this construction in many more interesting cases. In particular, the Serre-Tate theorem says that the deformation theory of an elliptic curve is determined by that of its associated $p$-divisible group. This allows one to reduce the construction of a derived stack structure on the map

$$\mathcal{M}_{ell}\to\mathcal{M}_{FG}$$

to that of the structure on the stacks $$Spec(\pi_*E_n)/G$$ as above, and this gives the construction of the spectrum of topological modular forms $TMF$.

## Connective models

From the point of view of computations, the connective theories $ko$ and $tmf$ are far more useful and important than their periodic versions $KO$, $Tmf$, and $TMF$. For instance, Mahowald showed that $ko\wedge ko$ splits into Brown-Gitler spectra, and he used this to analyze enough of the $ko$-based Adams spectral sequence to prove the height 1 telescope conjecture at $p=2$. Behrens--Hill--Hopkins--Mahowald used $tmf$ to produce a $$v_2^{32}$$ self map on the sphere, and it is a standard technique in computations to use the (known) Hurewicz image of $tmf$ to deduce relations in $$\pi_*S^0$$. 

This is due to the fact that the $$\mathcal{A}_*$$-comodule algebras $$H_*ko$$ and $$H_*tmf$$ are known, and in particular the Adams spectral sequences of $ko$ and $tmf$ have been computed. We remarked above that $$H_*L_{K(n)}S^0=0$$, and unfortunately the same is true for the $$EO_n(G)$$'s, so their Adams spectral sequences carry no information. The ANSS gives a partial fix for this as discussed above, but we would like to be able to compare with both the Adams SS and the ANSS of the sphere.

Passing to connective covers does not give a substantial improvement as the homotopy groups of the $$EO_n(G)$$'s are not degreewise finitely generated. One wants good connective models $$eo_n(G)$$'s of the $$EO_n(G)$$'s with strong finiteness properties and computable Adams spectral sequences. We want a connective ring spectrum $eo_n(G)$ such that there is a ring map

$$eo_n(G)\to EO_n(G)$$

that is a $K(n)$-local equivalence, so that $$eo_n(G)$$ sees the same height $n$ information in $$\pi_*S^0$$ as $$EO_n(G)$$. Moreover, we would like $$eo_n(G)$$ to be an fp-spectrum in the sense of Mahowald-Rezk, so that it has a computable Adams spectral sequence. This is already a lot to ask, but it ignores the special role played by $ko$ and $tmf$ in the context of Hopkins' relative Spec construction above. In particular, for any such candidate $e$ satisfying the above properties, the ring $$e\times H\mathbb{F}_2$$ also satisfies these properties, but seems perhaps a less satisfying choice.

Therefore we ask for conditions also on the ANSS of $eo_n(G)$, or, better, on $$\mathcal{M}_{eo_n(G)}$$. We want the composition $$S^0\to eo_n(G)\to EO_n(G)$$ to give a factorization

$$Spec(\pi_*E_n)/G\to\mathcal{M}_{eo_n(G)}\to\mathcal{M}_{FG}$$

where the stack in the middle satisfies some nice list of algebro-geometric properties. It is difficult to say exactly what those should be, and I am working with Lennart Meier currently on this with particular focus on the example $$tmf_0(3)$$. For now, it is best to look back once again at $KO$. Here we have a factorization 

$$Spec(\mathbb{Z}[v_1^{\pm}])/C_2\to\mathcal{M}_{ko}\to\mathcal{M}_{FG}$$

A naive guess for $$\mathcal{M}_{ko}$$ would be $$Spec(\mathbb{Z}[v_1])/C_2$$, but the map $$Spec(\mathbb{Z}[v_1])/C_2\to\mathcal{M}_{FG}$$ is not affine, a necessary condition for the maps $$\mathcal{M}_E\to\mathcal{M}_{FG}$$. Hopkins shows instead that the map $$\mathcal{M}_{KO}\to\mathcal{M}_{ko}$$ is the inclusion of the moduli stack of nonsingular quadratic equations in that of all quadratic equations. A similar story holds for $tmf$, where the map $$\mathcal{M}_{tmf}\to\mathcal{M}_{TMF}$$ is the inclusion of the moduli stack of elliptic curves in that of all cubic equations.

Finally, we would like the $eo_n(G)$'s to be structured ring spectra in some sense, so that we may lift this factorization to a category of derived stacks, as discussed above.

## The slice filtration

slice(ko), and genuine fixed points. real oriented homotopy theory and hhr. bpgm theories. - smashing localizations paper, cofree theorem and the segal conjecture (lots of slice differentials), bpgm's are fp, homology computations, stacks for bpgms: determined for ER(n)'s in thesis, chromatic measure (working on generic property for fp spectra) moving onto BPRns with lennart.



 
