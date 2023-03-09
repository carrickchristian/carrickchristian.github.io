---
layout: page
title: Research
---

On this page, I give some motivation for my research and try to explain what the broader goals are, while relating the contents of my papers (both published and in preparation) to these goals. I am interested in a lot of things in homotopy theory--mostly those with an equivariant flavor--but I'll focus here on one of the main strands in my research at the moment: (connective) higher real $K$-theories. I've aimed this discussion at people who are familiar with chromatic homotopy. For a list of my papers, return to the [home](https://carrickchristian.github.io) page.

## Higher real $K$-theories

In all that follows, we work at the prime $p=2$. Chromatic homotopy theory studies spaces and spectra from the point of view of complex-oriented cohomology theories. On one hand, facts like the nilpotence theorem tell us these theories see quite a lot of information. On the other, for any complex-oriented ring spectrum $R$, the unit map

$$\pi_*S^0\to \pi_*R$$

sends every class in positive degrees to zero, since it factors thru $MU$. If we want to detect classes in the homotopy groups of spheres in this way, we should replace $R$ with theories that are not complex-oriented, such as $L_nS^0$ or $L_{K(n)}S^0$. In fact, chromatic convergence tells us in some sense these latter theories see *everything*. 

So we turn to computing $\pi_*L_{K(n)}S^0$. We start by considering its Adams spectral sequence, but $$H_*(E(n);\mathbb{F}_2)=0$$, so $$H_*(L_nS^0;\mathbb{F}_2)=0$$ since $L_n$ is smashing, and chromatic fracture squares inductively tell us that $$H_*(L_{K(n)}S^0;\mathbb{F}_2)=0$$. Since the Adams spectral sequence therefore gets us nowhere, we try the Adams-Novikov spectral sequence. Here things work much more nicely: the $K(n)$-local $E_n$-based ANSS of the sphere is isomorphic to the (continuous) homotopy fixed point spectral sequence for the action of $\mathbb{G}_n$ (the Morava stabilizer group) on $$\pi_*E_n$$. Even better, the $K(n)$-local $E_n$-based AN resolution is equivalent to the $\mathbb{G}_n$-cobar resolution of $E_n$. In particular, we have the theorem of Devinatz-Hopkins:

$$L_{K(n)}S^0\simeq E_n^{h\mathbb{G}_n}$$

So if we could compute $$H^*(\mathbb{G}_n;\pi_*E_n)$$, we could say lot about $$\pi_*L_{K(n)}S^0$$. However, $\mathbb{G}_n$ is a big profinite group, and the action is defined by the universal property of $$\pi_*E_n$$, so writing down explicit formulas for the action is quite difficult. We can do much better by replacing $\mathbb{G}_n$ with a finite subgroup. 

For example, $\mathbb{G}_n$ contains a canonical copy of $C_2$ given by the formal inverse on the formal group. At height 1, there is an equivalence $E_1\simeq KU^{\hat{}}_2$, and the $C_2$-action corresponds to complex conjugation on $KU$, giving an equivalence $E_1^{hC_2}\simeq KO^{\hat{}}_2$. It is straightforward to write down explicit formulas for the action in this case; one finds that $C_2$ acts by multiplication by $-1$ on the Bott class. The ANSS for $KO$ is then isomorphic to the easily computed HFPSS for this $C_2$ action.

It was an observation of Ravenel and Hopkins-Miller that $L_{K(n)}S^0$ is well approximated by $$EO_n(G):=E_n^{hG}$$ for finite subgroups $G\subset\mathbb{G}_n$, and that these *Hopkins-Miller higher real $K$-theories* are more computable. In fact, $$L_{K(1)}S^0$$ has a finite resolution which reduces the computation of $$\pi_*L_{K(1)}S^0$$ to the tractable computation of $$\pi_*KO$$ described above. At the prime $p=3$, Goerss--Henn--Mahowald--Rezk provided a similar finite resolution of $$L_{K(2)}S^0$$ consisting of $$EO_n(G)$$ spectra related to $TMF$.

## Hopkins' *From Spectra to Stacks*

Like $KO$, the $EO_n$ theories are not complex-orientable; as above, we see this as a good thing. Hopkins noticed that we can still study non complex-orientable theories from the point of view of algebraic geometry and formal groups via the following relative Spec construction in stacks. For any ring spectrum $E$, we have a Hopf algebroid $$(MU_*E,MU_*(MU\wedge E))$$ and (modding out by the $$\mathbb{G}_m$$ action) a resulting map of stacks

$$\mathcal{M}_E\to\mathcal{M}_{FG}$$

When $E$ is complex-orientable, this recovers the map

$$Spec(E_*)/\mathbb{G}_m\to\mathcal{M}_{FG}$$

classifying the formal group on $$E_*$$ discovered by Quillen. In this language, the fact that the $E_2$-page of the ANSS for $KO$ is isomorphic to that of the $$C_2$$-HFPSS for $KU$ becomes the observation that

$$
\begin{align}
\mathcal{M}_{KO}\simeq \big(Spec(KU_*)/\mathbb{G}_m\big)/C_2
\end{align}
$$

Hopkins provides a modular interpretation of this stack and the map to $\mathcal{M}_{FG}$ in terms of (nonsingular) quadratic equations (see also the last chapter of my [thesis](https://carrickchristian.github.io/main.pdf) for details on this). More generally, one always has an equivalence 

$$
\begin{align}
\mathcal{M}_{EO_n(G)}\simeq Spec(\pi_0E_n)/G
\end{align}
$$


For this, combine Section 6 of [Mathew-Meier](https://arxiv.org/pdf/1311.0514.pdf) with Proposition 6.3.1 in my thesis.

The Landweber exact functor theorem tells us that if 

$$Spec(R)\to\mathcal{M}_{FG}$$

is a flat map of stacks, then there is an (even-periodic) complex-oriented ring spectrum lifting this map along the above construction. We may ask if there's a more general statement replacing $Spec(R)$ with a (non-affine) stack. If

$$\mathcal{N}\to\mathcal{M}_{FG}$$

is an affine, flat map, pulling back the cover $$Spec(L)\to \mathcal{M}_{FG}$$ to $$\mathcal{N}$$ gives a cover by affines with flat maps to $$\mathcal{M}_{FG}$$. The corresponding Cech complex gives a cosimplicial diagram of Landweber exact theories. If we could lift this diagram to an infinity category of ring spectra (e.g. the category of $$E_\infty$$-rings), we could take its homotopy limit $E$, and under some mild assumptions, we will have the desired equivalence $$\mathcal{M}_E\simeq\mathcal{N}$$ as stacks over $$\mathcal{M}_{FG}$$.

This leads one directly to *derived stacks*, which very roughly is the sort of structure that would allow one to lift the above diagram to the category of $$E_\infty$$-rings. The Goerss-Hopkins-Miller theorem gives this in the $$EO_n$$ case, refining (2) to an appropriate equivalence of derived stacks. Back to $KO$, the fact that the ANSS of $KO$ is isomorphic to the $$C_2$$-HFPSS of $KU$ (not just on the $$E_2$$-page) is phrased in this language as the fact that (1) lifts to an equivalence of derived stacks, and in particular their descent spectral sequences coincide.

This fact about the $EO_n$'s allows one to reverse this construction in many more interesting cases. In particular, the Serre-Tate theorem says that the deformation theory of an elliptic curve is determined by that of its associated $p$-divisible group. This allows one to reduce an essential step in the construction of $TMF$--which comes from a derived stack structure on the map

$$\mathcal{M}_{ell}\to\mathcal{M}_{FG}$$

--to that of the derived stack structure on the stacks $$Spec(\pi_0E_n)/G$$ as above.

## Connective models

From the point of view of computations, the connective theories $ko$ and $tmf$ are far more useful and important than their periodic versions $KO$, $Tmf$, and $TMF$. For instance, Mahowald showed that $ko\wedge ko$ splits into Brown-Gitler spectra, and he used this to analyze enough of the $ko$-based Adams spectral sequence to prove the height 1 telescope conjecture at $p=2$. A similar role is played at height 2 by $tmf$; Behrens--Hill--Hopkins--Mahowald used $tmf$ to produce a $$v_2^{32}$$ self map on the sphere for example. In general, it is a standard technique in computations to use the (known) Hurewicz image of $tmf$ to deduce relations in $$\pi_*S^0$$. 

This theories are convenient to work with in large part because the $$\mathcal{A}_*$$-comodule algebras $$H_*ko$$ and $$H_*tmf$$ are known, and in particular the Adams spectral sequences of $ko$ and $tmf$ have been completely computed. We remarked above that $$H_*L_{K(n)}S^0=0$$, and the same is true for the $$EO_n(G)$$'s, so again their Adams spectral sequences carry no information. The ANSS gives a partial fix for this as discussed above, but we would like to be able to compare with both the Adams SS and the ANSS of the sphere.

Passing to connective covers does not give a substantial improvement as the homotopy groups of the $$EO_n(G)$$'s are not degreewise finitely generated. One wants smaller theories so that the various corresponding spectral sequences are more sparse: this makes it easier to deduce differentials and show certain classes are permanent cycles, as there is less information to keep track of. A major goal is thus to find good connective models $$eo_n(G)$$'s of the $$EO_n(G)$$'s with strong finiteness properties and computable Adams spectral sequences. One wants a connective ring spectrum $eo_n(G)$ with a ring map

$$eo_n(G)\to EO_n(G)$$

that is a $K(n)$-local equivalence, so that $$eo_n(G)$$ sees the same height $n$ information in $$\pi_*S^0$$ as $$EO_n(G)$$. Moreover, we would like $$eo_n(G)$$ to be an fp-spectrum in the sense of Mahowald-Rezk, so that it has a computable Adams spectral sequence. This is already a lot to ask, but it ignores the special role played by $ko$ and $tmf$ in the context of Hopkins' relative Spec construction above. In particular, for any such candidate $e$ satisfying the above properties, the ring $$e\times H\mathbb{F}_2$$ also satisfies these properties, but seems perhaps a less satisfying choice.

Therefore we ask for conditions also on the ANSS of $eo_n(G)$, or, better, on $$\mathcal{M}_{eo_n(G)}$$. We want the composition $$S^0\to eo_n(G)\to EO_n(G)$$ to give a factorization

$$Spec(\pi_0E_n)/G\to\mathcal{M}_{eo_n(G)}\to\mathcal{M}_{FG}$$

where the stack in the middle satisfies some nice list of algebro-geometric properties. It is difficult to say exactly what those should be, and I am working with Lennart Meier currently on this with particular focus on the example $$tmf_0(3)$$. For now, it is best to look back once again at $KO$. Here we have a factorization 

$$\big(Spec(\mathbb{Z}[v_1^{\pm}])/\mathbb{G}_m\big)/C_2\to\mathcal{M}_{ko}\to\mathcal{M}_{FG}$$

A naive guess for $$\mathcal{M}_{ko}$$ would be $$\big(Spec(\mathbb{Z}[v_1])/\mathbb{G}_m\big)/C_2$$, but the map 

$$\big(Spec(\mathbb{Z}[v_1])/\mathbb{G}_m\big)/C_2\to\mathcal{M}_{FG}$$

is not affine, a necessary condition for the maps $$\mathcal{M}_E\to\mathcal{M}_{FG}$$. Hopkins shows instead that the map $$\mathcal{M}_{KO}\to\mathcal{M}_{ko}$$ is the inclusion of the moduli stack of nonsingular quadratic equations into that of all quadratic equations. A similar story holds for $tmf$, where the map $$\mathcal{M}_{TMF}\to\mathcal{M}_{tmf}$$ is the inclusion of the moduli stack of elliptic curves in that of all cubic equations.

Finally, we would like the $eo_n(G)$'s to be structured ring spectra in some sense, so that we may lift this factorization to a category of derived stacks, as discussed above.

## The slice filtration

Let's return to the wrong guess that $$\mathcal{M}_{ko}\simeq \big(Spec(\mathbb{Z}[v_1])/\mathbb{G}_m\big)/C_2$$, as it will give us a sense for why genuine equivariant homotopy enters the picture. We may write $$\mathcal{M}_{ko}$$ as a geometric realization

$$
\mathcal{M}_{ko}\simeq \big|\mathcal{M}_{ku}\Leftarrow \mathcal{M}_{ku}\times_{\mathcal{M}_{ko}}\mathcal{M}_{ku}\Lleftarrow \cdots\big|
$$

The maps in this simplicial diagram are not etale (in contrast to $$\mathcal{M}_{KO}$$), so we cannot use this to define a derived stack structure on $$\mathcal{M}_{ko}$$. However, the diagram lifts to derived affine schemes, and so we have an associated descent spectral sequence converging to $\pi_*ko$, in this case the SS associated to the cosimplicial spectrum

$$
ku\Rightarrow ku\otimes_{ko}ku\Rrightarrow \cdots
$$

If we had the equivalence $$\mathcal{M}_{ko}\simeq \big(Spec(\mathbb{Z}[v_1])/\mathbb{G}_m\big)/C_2$$, by comparison with the descent spectral sequence for $$\mathcal{M}_{KO}$$, we would see that the descent spectral sequence for $$\mathcal{M}_{ko}$$ coincides with the HFPSS for $ku$ with its complex conjugation action (i.e. Atiyah's Real $K$-theory $$k_\mathbb{R}$$). But this latter spectral sequence does not converge to $$\pi_*ko$$; in fact 

$$ko\not\simeq ku^{hC_2}$$

Rather, $$ko\simeq ku^{C_2}$$, where we take genuine fixed points. That we had to pass to the genuine category is reflected in the spectral sequence: *the descent spectral sequence for $$\mathcal{M}_{ko}$$ is the slice spectral sequence for $k_\mathbb{R}$*. This is a fascinating connection for which I do not have a conceptual explanation; one simply observes that the slice SS for $$k_\mathbb{R}$$ coincides with the ANSS for $$ko$$ after computing each separately. I am working on giving a derived algebraic geometry explanation for this and finding other examples where the descent and slice SS's coincide.

## HHR theories

$$k_\mathbb{R}$$ fits into a general class of connective equivariant theories defined by Hill--Hopkins--Ravenel and studied in detail by Beaudry--Hill--Shi--Zeng. These theories live in the context of *Real-oriented homotopy theory*. In short, this is the study of complex orientations in (genuine) $$C_2$$-spectra, where $$\mathbb{C}\mathbb{P}^\infty$$ and $MU$ are given $C_2$-actions via complex conjugation. The resulting $$C_2$$-spectrum $$MU_\mathbb{R}$$ is a $$C_2$$-$$E_\infty$$-ring, and 2-locally it has quotients $$BP_\mathbb{R}$$ and $$BP_\mathbb{R}\langle n\rangle$$ lifting the classical theories; $$k_\mathbb{R}$$ is a form of $$BP_\mathbb{R}\langle 1\rangle$$ for example.

Hahn-Shi showed that there is a $C_2$-equivariant orientation map $$MU_\mathbb{R}\to E_n$$, where $E_n$ is Morava $E$-theory with its $C_2$-action by the formal inverse on the formal group. It sends $\overline{v}_i$ (equivariant lifts of the classical $v_i$'s) to zero for $i>n$, resulting in an equivariant map $$BP_\mathbb{R}\langle n\rangle\to E_n$$, and hence a map

$$BP_\mathbb{R}\langle n\rangle^{C_2}\to EO_n(C_2)$$

This map turns out to be a $K(n)$-local equivalence. More generally, if $C_2\subset G\subset \mathbb{G}_n$, we get by adjunction a $G$-equivariant orientation map 

 $$N_{C_2}^GMU_\mathbb{R}\to E_n$$
 
Beaudry--Hill--Shi--Zeng studied quotients of $$N_{C_2}^GMU_\mathbb{R}$$ when $G=C_{2^n}$, introducing the so-called $$BP^{((G))}\langle m\rangle$$'s generalizing the $$BP_\mathbb{R}\langle n\rangle$$'s, and showed there are $K(h)$-local equivalences

$$BP^{((G))}\langle m\rangle^G\to EO_{h}(G)$$

when $h=2^{n-1}m$. These $$BP^{((G))}\langle m\rangle^G$$'s are thus candidates for $$eo_h(G)$$, and they have the added feature of having a well-understood slice filtration.

In an upcoming paper with Mike Hill, we establish the desired finiteness properties of the $$BP^{((G))}\langle m\rangle^G$$'s, showing that they are fp spectra of type $h$. In our paper on the homological slice spectral sequence, Mike Hill, Doug Ravenel, and I move toward computing the Adams spectral sequence of these theories by introducing a spectral sequence, which we compute completely in the case $G=C_2$ for $m\le 3$.

The slice filtration is an instance of a general phenomenon appearing in equivariant homotopy and with $$MU_\mathbb{R}$$ and $$N_{C_2}^GMU_\mathbb{R}$$ in particular. One can deduce information about non-complex-orientable theories like the $$BP^{((G))}\langle m\rangle^G$$'s while still working in a complex-oriented setting; one can work with the complex-oriented $G$-spectrum $$BP^{((G))}\langle m\rangle$$ and then pass to fix points. A prototypical example is the fact that equivariant Bott periodicity for $K_\mathbb{R}$ carries both the $KU$ and $KO$ Bott periodicities.

I have spent a lot of time thinking about chromatic homotopy internal to the equivariant setting in this way. In particular I looked into analogues of the Ravenel conjectures in chromatic homotopy in this setting and showed that forms of the chromatic convergence and smash product theorems hold for localized versions of the $$BP^{((G))}\langle m\rangle$$'s in the Borel-complete setting. Borel-completeness is a somewhat surprising feature in Real-oriented homotopy theory: I showed in fact that $$N_{C_2}^{C_{2^n}}MU_\mathbb{R}$$ is Borel-complete for all $n$, using the slice filtration. This resulted in a proof of the Segal conjecture for $C_2$ as a surprising corollary, demonstrating how much information these theories hold.

This theorem implies in particular that the slice SS and HFPSS of $$N_{C_2}^{C_{2^n}}MU_\mathbb{R}$$ converge to the same thing. These spectral sequences differ dramatically on the $E_2$ page, and this can be used to deduce various differentials in both of them. This has consequences for the slice SS's of the truncated theories  $$BP^{((G))}\langle m\rangle$$, which are *not* Borel-complete.

## Chromatic numbers

Following our discussion above of connective models, it would be good to know some things about the stacks

$$\mathcal{M}_{BP^{((G))}\langle m\rangle^G}$$

We were able to guess the stack for $ko$ from its open substack corresponding to $KO$, so we begin with the localized variants $$(D^{-1}BP^{((G))}\langle m\rangle)^G$$. In my thesis, I gave a complete description of these for $G=C_2$ as quotient stacks:

$$\big(Spec(E(n)_*)/\mathbb{G}_m\big)/C_2\simeq\mathcal{M}_{E_\mathbb{R}(n)^{C_2}}$$

and gave several modular interpretations of these stacks following those for $KO$ and $Tmf_1(3)$. In an upcoming paper I prove the analogous result for larger groups 

$$\big(Spec(\pi_*^eD^{-1}BP^{((G))}\langle m\rangle)/\mathbb{G}_m\big)/G\simeq\mathcal{M}_{D^{-1}BP^{((G))}\langle m\rangle^G}$$

and am currently investigating possibilities for the connective stacks. 

In my thesis I defined the notion of chromatic number for a spectrum $E$:

$$\Phi(E):=\min\{n\ge0\text{ }|\text{  }E\wedge X(n)\text{ is complex orientable}\}$$

where $$X(n)$$ is Ravenel's Thom spectrum $$Thom(\Omega SU(n)\to \Omega SU\simeq BU)$$. This is a straightforward invariant of $E$ that I show is in fact an invariant of $$\mathcal{M}_E$$, which makes precise the sense in which the stackiness of $$\mathcal{M}_E$$ measures the failure of $E$ to be complex-orientable. I use the stack description above to deduce for example that $$\Phi(E_\mathbb{R}(n)^{C_2})=2^n$$.  

I am working currently on relating chromatic numbers to a similar integer defined by Bhattacharya-Chatham in terms of orientations of vector bundles. I am also looking into what extent the chromatic number is detected by the Adams spectral sequence and, in particular, chromatic number as a generic property of fp spectra.



 
